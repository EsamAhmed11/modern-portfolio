# Portfolio API Backend

ASP.NET Core 8 Web API with Clean Architecture

## Project Structure
- PortfolioAPI.API - Web API Controllers
- PortfolioAPI.Core - Domain Entities  
- PortfolioAPI.Infrastructure - EF Core DbContext
- PortfolioAPI.Application - Business Logic

## Setup
1. Update connection string in appsettings.json
2. Run migrations: dotnet ef database update
3. Start API: dotnet run

## Default Admin Credentials
Username: admin
Password: Admin@123
