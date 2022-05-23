#!/bin/bash

NAME="Applebees"
THOUGHTS="Food is dog but worse"
TOKEN="13881640d8cc70f7ce0de723d3cc39b2"

API="http://localhost:4741"
URL_PATH="/add-rests"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "restaurant": {
      "name": "'"${NAME}"'",
      "thoughts": "'"${THOUGHTS}"'"
    }
  }'

echo
