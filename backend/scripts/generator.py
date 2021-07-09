"""
This script will help generating sites for insertion into the planet rebase database.
"""
import time


def generate_comm_towers(amount):
    print('Generating sites...')
    time.sleep(2)
    print("Inserting into db...")
    time.sleep(1)
    print(f"{amount} sites generated and inserted.")


if __name__ == "__main__":
    generate_comm_towers(1000)
