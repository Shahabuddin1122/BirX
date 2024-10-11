import os
from pathlib import Path

import environ
import requests

env = environ.Env()
env_file = os.path.join(Path(__file__).resolve().parent.parent, '.env')
environ.Env.read_env(env_file=env_file)


def get_image_url(image):
    api_key = env('IMAGEBB_API_KEY')

    endpoint = "https://api.imgbb.com/1/upload?key=" + api_key + "&folder=BirX"
    files = {"image": image}

    response = requests.post(endpoint, files=files)

    if response.status_code == 200:
        data = response.json()
        image_url = data["data"]["url"]
        return image_url
    else:
        print("Error uploading image:", response.text)
        return None
