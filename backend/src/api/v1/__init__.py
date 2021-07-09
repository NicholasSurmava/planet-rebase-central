import sys

from flask import (
    Blueprint, jsonify, current_app
)

from src.core.Warehouse.Site import Site

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/')
def api_index():

    return 'here is where the swagger or info for the api goes.'


@api.route('/get_sites')
def api_get_sites():
    site = Site()

    try:
        sites = site.get_sites("comm_tower")

        payload = [
            sites
        ]

        return jsonify(payload), 200

    except Exception as err:
        current_app.logger.info(str(err))

        return jsonify({
            "sites": [],
            "message": str(err)
        }), 400
