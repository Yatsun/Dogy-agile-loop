from langchain_core.language_models import BaseLLM, BaseChatModel
from langchain_core.prompts import BasePromptTemplate, PromptTemplate
from langchain.chains.llm import LLMChain
from langchain.chains.base import Chain

from pathlib import Path
from typing import List, Dict
import logging

from utils import ReducedOpenAPISpec, get_matched_endpoint

logger = logging.getLogger(__name__)
ROOT_DIR: Path | str = Path(__file__).resolve(strict=True).parents[1]
TARGET_DIR: Path | str = ROOT_DIR / "icl_examples" / "scenario_selector"

SCENARIO_SELECTOR_PROMPT = """You are an API selector. Your task is to determine the
best API based on the user input. Try your best to determine the best API to
use, if the query does not correspond to any API, return "none". The background
context for all of them is that they are all dog-friendly. The output should all
be in lowercase and only the name of the API, no punctuations or anything else.
Here are the examples for each API, your goal is to determine the correct API
based on the following information. The pattern is api: query_example. Here are
the examples:

{query_examples}
------------------------------------------------------------------------------
This is my query: {input}"""


class ScenarioSelector(Chain):
    llm: BaseLLM | BaseChatModel
    scenario_selector_prompt: BasePromptTemplate
    output_key: str = "result"

    def __init__(self, llm: BaseLLM | BaseChatModel) -> None:
        scenario_selector_prompt = PromptTemplate(
            template=SCENARIO_SELECTOR_PROMPT,
            partial_variables={
                "query_examples": self._format_query_examples(TARGET_DIR)
            },
            input_variables=["input"]
        )
        super().__init__(llm=llm, scenario_selector_prompt=scenario_selector_prompt)

    def _format_query_examples(self, directory_path: Path | str):
        files_dict: Dict = {}
        # txt_files: List[str] = [file.stem for file in directory_path.glob("*.txt")]
        for file in directory_path.glob("*.txt"):
            file_stem = file.stem

            with open(file, "r") as f:
                lines = f.readlines()

            files_dict[file_stem] = lines
        return files_dict

    def _call(self, inputs: Dict[str, str]) -> str:
        query = inputs["input"]
        scenario_selector_prompt = LLMChain(llm=self.llm, prompt=self.scenario_selector_prompt)
        scenario_selector_prompt_output = scenario_selector_prompt.run(input=query)

        return {"result": scenario_selector_prompt_output}

    @property
    def _chain_type(self) -> str:
        return "ApiLLM Preselector"

    @property
    def input_keys(self) -> List[str]:
        return ["input"]

    @property
    def output_keys(self) -> List[str]:
        return [self.output_key]
