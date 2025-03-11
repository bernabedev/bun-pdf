# Usar la imagen oficial de Bun como base
FROM oven/bun:latest as builder

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lockb* ./

# Instalar dependencias
RUN bun install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación (si es necesario)
# RUN bun run build

# Etapa de producción
FROM oven/bun:latest

WORKDIR /app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/src ./src

# Exponer el puerto que la aplicación utiliza
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["bun", "run", "src/server.tsx"]