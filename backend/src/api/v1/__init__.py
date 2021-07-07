from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)

from src.core.Warehouse import Warehouse

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/')
def api_index():

    return 'here is where the swagger or info for the api goes.'


@api.route('/get_sites')
def api_get_sites():
    warehouse = Warehouse()

    sites = warehouse.get_sites("comm_tower")

    data = [
        sites
    ]

    return jsonify(data)
