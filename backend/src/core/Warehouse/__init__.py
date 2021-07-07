import time
from flask import current_app


class Warehouse:
    def __init__(self) -> None:
        pass

    def get_sites(self, type):
        current_app.logger.info("Getting Sites")
        time.sleep(4)
        return {"sites": "some sites"}
