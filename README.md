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
Here, make sure to start installing any packages needed using `pnpm` package manager.

## Tools

### Database
- [Turso](https://turso.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)

### Authentication
- [Lucia Auth](https://lucia-auth.com/)

### Styles
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [shadcn-svelte](https://www.shadcn-svelte.com/)
- [Lucide-svelte](https://lucide.dev/guide/packages/lucide-svelte)

### Etc
- [Editor.js](https://editorjs.io/)

## Deploying

TODO:
create `dockerfile.prod` and `docker-compose.prod.yaml` to containerize and deploy.
