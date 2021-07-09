import sys

from flask import (
    Blueprint, jsonify, current_app
)

from src.core.Warehouse import Warehouse

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/')
def api_index():

    return 'here is where the swagger or info for the api goes.'


@api.route('/get_sites')
def api_get_sites():
    warehouse = Warehouse()

    try:
        sites = warehouse.get_sites("planet-rebase-warehouse", "comm_tower")
        # sites = warehouse.get_sites("somewhere", "comm_tower")

        data = [
            sites
        ]

        return jsonify(data)

    except ValueError as err:
        current_app.logger.info(str(err))

        return jsonify({
            "sites": [],
            "status": 400,
            "message": str(err)
        })
