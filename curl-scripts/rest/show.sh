#!/bin/sh
TOKEN="13881640d8cc70f7ce0de723d3cc39b2"
ID="628bfbf9f88dc07cdd648fe2"

API="http://localhost:4741"
URL_PATH="/add-rests"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
