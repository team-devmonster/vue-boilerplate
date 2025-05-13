FROM oven/bun:1.0.29

ARG MODE=dev
ARG TARGET=bc

WORKDIR /app

COPY . .

RUN bun install

USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "$MODE:$TARGET"]