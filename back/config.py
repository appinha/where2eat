import os


class BaseConfig:
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
    SQL_TRACK_MODIFICATIONS = False
    SQL_RECORD_QUERIES = True

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SQLALCHEMY_ECHO = False  # change to True to see which queries the ORM is executing on the terminal

    db_username = os.getenv("DEV_DATABASE_USERNAME", "wheretoeat")
    db_password = os.getenv("DEV_DATABASE_PASSWORD", "wheretoeat")
    db_port = os.getenv("DEV_DATABASE_PORT", "5432")
    db_host = os.getenv("DEV_DATABASE_HOST", "localhost")
    db_name = os.getenv("DEV_DATABASE_NAME", "wheretoeat")

    SQLALCHEMY_DATABASE_URI = f"postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}"


class TestingConfig(BaseConfig):
    TESTING = True

    db_username = os.getenv("TEST_DATABASE_USERNAME", "wheretoeat")
    db_password = os.getenv("TEST_DATABASE_PASSWORD", "wheretoeat")
    db_host = os.getenv("TEST_DATABASE_HOST", "localhost")
    db_port = os.getenv("TEST_DATABASE_PORT", "5432")
    db_name = os.getenv("TEST_DATABASE_NAME", "wheretoeat")

    SQLALCHEMY_DATABASE_URI = f"postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}"


config = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,

    "default": DevelopmentConfig,
}

