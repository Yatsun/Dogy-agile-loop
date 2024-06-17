# Backend for Dogy.app
## Installation/Setup
1. Install [Python](https://www.python.org/downloads/) for your operating system/distribution.
2. Clone this repository to your local machine: `git clone https://github.com/Yatsun/Dogy_agile_loop.git`
3. Before setting up virtual environment, make sure you are at the root
   directory:
   - Windows: `python -m venv back` 
   - Mac/Linux: `python3 -m venv back` 
4. Switch to virtual environment:
   - Windows: `back\Scripts\activate` 
   - Mac/Linux: `source back/bin/activate` 
4. Go to `back/` directory. Install the necessary dependencies: `pip install -r requirements.txt`
5. Rename `.env.template` to `.env` and add your API keys manually.
6. You're good to go!! Have fun coding :)

## Development Tips
1. If you want to update dependencies or add new ones. Use this command
   `pip freeze > requirements.txt`
2. Make sure to add unnecessary build directories in `.gitignore`.
