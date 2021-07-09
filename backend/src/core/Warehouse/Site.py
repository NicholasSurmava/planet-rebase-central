import time
from flask import current_app

# TODO: Setup db with sqlalchemy
# from sqlalchemy import create_engine
# from sqlalchemy import Column, String, text
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker

# db_string = "postgresql://nwexlvuvspoihg:3e3a39622debbda3bfc60b3e3b33f5f0d02ce00dea050e5341fb37fb48c30947@ec2-3-224-7-166.compute-1.amazonaws.com:5432/d2dcrt7sq3qvc3"
# db = create_engine(db_string, echo=True, future=True)
# base = declarative_base()

# class Site(base):
#     __tablename__ = 'sites'
#     pass


class Site:
    # TODO: Setup a model
    # TODO: Move model to it's own MODELs dir.
    # TODO: Migrate this class into services dir
    def get_sites(self, type):

        current_app.logger.info(
            f"Getting sites of type \"{type}\"")
        time.sleep(4)
        sites = {"sites": [1, 2, 3, 4, 5, 6]}

        return sites

    def update_site(self):
        pass

    def add_new_site(self):
        # TODO: Setup SQL Alchemy and configure Postgres
        # TODO: Create a insert into DB method, expose out as API
        # Pass in an array of objects to create
        pass
