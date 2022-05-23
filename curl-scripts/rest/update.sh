#!/bin/bash
TOKEN="13881640d8cc70f7ce0de723d3cc39b2"
NAME="Juniper"
THOUGHTS="So freaking good, 10 out of 10 have eaten again"
ID="628bfbf9f88dc07cdd648fe2"


API="http://localhost:4741"
URL_PATH="/add-rests"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "restaurant": {
      "name": "'"${NAME}"'",
      "thoughts": "'"${THOUGHTS}"'"
    }
  }'

echo
