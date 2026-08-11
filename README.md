# My Discord Chat Bot

A feature-rich Discord chat bot I developed in high school that provided utility, information, and server-member features through customizable commands. The bot integrated external APIs and maintained persistent member data to provide personalized server statistics.

## Features

* **Daily** — Provides users with a daily reward or interaction.
* **Define** — Looks up and returns word definitions.
* **Image Lookup** — Searches for and returns relevant images based on user queries using web scraping.
* **Dictionary** — Provides dictionary and word-related information.
* **Member Statistics** — Stores and retrieves information about server members and displays their statistics.
* **Server Data Tracking** — Maintains persistent data for members across interactions.
* **Discord Commands** — Uses Discord's command system to provide an interactive experience directly within servers.

## How It Worked

The bot listened for commands sent within Discord servers and processed each request according to the corresponding command handler. For commands requiring external information, such as definitions or images, the bot communicated with external APIs to retrieve and return results.

Member information and server statistics were stored persistently, allowing the bot to track users over time and retrieve their data whenever requested.

## Technologies

* **JavaScript / Node.js**
* **Discord API**
* **External REST APIs**
* **Persistent Data Storage**

## Example Commands

```text
!daily
!define <word>
!dict <word>
!image <query>
!stats
```

## Project Goals

This project was originally created as a high-school programming project to explore:

* Building applications around an external API
* Working with event-driven applications
* Managing and storing user data
* Designing command-based interfaces
* Integrating multiple APIs into a single application
* Developing a real-world application used by multiple users

## Project Status

This project is no longer actively maintained and is preserved as a portfolio project demonstrating early experience with API integration, backend development, data persistence, and event-driven programming.
