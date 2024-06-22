from langchain_mistralai.chat_models import ChatMistralAI
from langchain_core.language_models import BaseLLM, BaseChatModel
from langchain_community.llms.openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path
import random
import os

from helper import *

logger = logging.getLogger()

ROOT_DIR: str = Path(__file__).resolve(strict=True).parent

def main():
    load_dotenv(f"{ROOT_DIR}/.env")

    logging.basicConfig(
        format="%(message)s",
        handlers=[logging.StreamHandler(ColorPrint())],
    )
    logger.setLevel(logging.INFO)

    scenario = input(
        "Please select a scenario (yelp/linear/others): "
    )

    scenario = scenario.lower()
    api_spec, headers = None, None

    if scenario == "yelp":
        api_spec, headers = process_spec_file(
            file_path="specs/yelp_oas.json", token=os.environ["YELP_KEY"]
        )

        query_example="Provide me with a list of restaurants near Sweden"
    else:
        raise ValueError(f"Unsupported scenario: {scenario}")

    populate_api_selector_icl_examples(scenario=scenario)
    populate_planner_icl_examples(scenario=scenario)

    requests_wrapper = Requests(headers=headers)
    # text-davinci-003

    # llm = OpenAI(model_name="gpt-4", temperature=0.0, max_tokens=1024)
    llm = ChatMistralAI(
        endpoint=os.environ["AZURE_MISTRAL_URL"],
        mistral_api_key=os.environ["AZURE_MISTRAL_KEY"],
        temperature=0.0,
        max_tokens=1024
    )

    api_llm = ApiLLM(
        llm,
        api_spec=api_spec,
        scenario=scenario,
        requests_wrapper=requests_wrapper,
        simple_parser=False,
    )

    print(f"Example instruction: {query_example}")
    query = input(
        "Please input an instruction (Press ENTER to use the example instruction): "
    )
    if query == "":
        query = query_example

    logger.info(f"Query: {query}")

    start_time = time.time()
    api_llm.run(query)
    logger.info(f"Execution Time: {time.time() - start_time}")


if __name__ == "__main__":
    main()
