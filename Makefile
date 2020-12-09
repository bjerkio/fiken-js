generate:
	java -jar openapi-generator-cli.jar \
	generate \
	-i ./swagger.json \
	-g typescript-fetch \
	-o ./src/generated \
	--additional-properties=supportsES6=true,useSingleRequestParameter=true,typescriptThreePlus=true

download_jars:
	curl -o ./openapi-generator-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0-beta3/openapi-generator-cli-5.0.0-beta3.jar

download_swagger:
	curl -o ./swagger.json https://api.fiken.no/api/v2/docs/swagger.yaml

.PHONY: download_swagger
.PHONE: download_jars
.PHONY: generate