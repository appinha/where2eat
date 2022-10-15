.PHONY: run-front
run-front:
	cd front && yarn start

.PHONY: test-front
test-front:
	cd front && yarn test