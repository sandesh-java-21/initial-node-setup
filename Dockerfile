# Step 1: Use Node.js 22
FROM node:22-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy project files
COPY . .

# Step 6: Expose port
EXPOSE 8081

# Step 7: Run project
CMD ["npm", "run", "server"]
