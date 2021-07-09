import time
from flask import current_app


class Warehouse:
    def get_sites(self, source, type):
        if source == "planet-rebase-warehouse":
            current_app.logger.info(
                f"Getting sites of type \"{type}\" from source \"{source}\"")
            sites = self.__get_pr_warehouse(type)
            return sites
        else:
            raise ValueError("Invalid Source")

    def __get_pr_warehouse(self, type):
        time.sleep(4)
        return {"sites": [1, 2, 3, 4, 5, 6]}
