# Remnant Journey
Is a web application for meditating on God's word.

## Get Started

### Run Docker container

```bash
$ docker-compose up
```
This command uses `docker-compose.yaml` file to build(if not built) and image and start a development server on: [localhost:5173](http://localhost:5173/).

- Add `--build` tag if it needs to be built again.

### Installing packages

```bash
$ docker exec -it <container-name> sh
```
This will start a `shell` CLI showing `/ app # `
Here, start installing any packages needed using `yarn` package manager.

## Deploying

TODO:
create `dockerfile.prod` and `docker-compose.prod.yaml` to containerize and deploy.
