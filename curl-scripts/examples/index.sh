#!/bin/sh
TOKEN="13881640d8cc70f7ce0de723d3cc39b2"
_ID=_id"628bf04b6016fe78b5c5a825"
API="http://localhost:4741"
URL_PATH="/examples"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
