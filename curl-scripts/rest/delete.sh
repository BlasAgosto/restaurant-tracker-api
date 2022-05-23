#!/bin/bash
TOKEN="13881640d8cc70f7ce0de723d3cc39b2"
ID="628bfbd0f88dc07cdd648fe1"

API="http://localhost:4741"
URL_PATH="/add-rests"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
