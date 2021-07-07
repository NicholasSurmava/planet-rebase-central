from flask import Flask, jsonify


def create_app(config):
    app = Flask(__name__)
    app.config.from_mapping(config)

    @app.route('/heartbeat')
    def heartbeat():
        return jsonify({'app_name': 'API', 'version': 1, 'status': 'badum badum badum'})

    return app
