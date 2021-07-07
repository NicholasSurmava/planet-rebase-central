from src import create_app

config = {
    "PORT": 5000,
    "ENV": 'development',
    "DEBUG": True
}


if __name__ == '__main__':
    server = create_app(config)

    server.logger.info(f"Server started on port: {config['PORT']}")
    server.run()
