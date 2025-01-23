FROM oven/bun:latest
WORKDIR /app
COPY dist/ ./dist/
EXPOSE 3000
CMD ["bun", "dist/index.js"]