
import requests

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "gemma3:4b",
        "prompt": "Explain an AI research agent in three simple sentences.",
        "stream": False,
    },
    timeout=120,
)

response.raise_for_status()
data = response.json()

print("\nGemma's response:\n")
print(data["response"])
