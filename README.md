# Elevate
[![Elevate App](https://img.shields.io/badge/Deployed_Elevate_App-purple)](https://qoryhanisagal.github.io/Elevate/)
### Abstract:
**Elevate** is a motivational poster generator app designed to inspire creativity and positivity. 

## Features
- Generate random posters with pre-loaded images, quotes, and titles.
- Create custom posters by entering their own image, title, and quote.
- Save posters to a personal gallery for future reference.
- View and manage saved posters, including deleting them if needed.

This app solves the problem of needing a quick, user-friendly way to generate and store motivational content.

## Getting Started
1. Fork this repository by clicking the “Fork” button at the top right of the GitHub page.
2. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:<your-username>/Elevate.git
   ```
3. Navigate into the project directory:
   ```bash
   cd Elevate
    ```
4. Open the project in your text editor:
    ```bash
    code .
    ```
5. Launch the app in your browser:
    ```bash 
    open index.html
    ```

### Preview of App:
![App Screenshot](./assets/screenshot.png)

### Context:
This project was completed as part of the **Mod 2 Software Engineering curriculum** at Turing School of Software & Design.
- **Timeframe:** Approximately 1 week.
- **Progress:** Early in the Mod 2 program, with a focus on JavaScript, HTML, CSS, and DOM manipulation.

### Contributors:
**Sequoyah Dozier**
- [**GitHub Repo**](https://github.com/qoryhanisagal)
- [**LinkedIn Profile**](https://www.linkedin.com/in/sequoyahdozier/)

### Learning Goals:

The primary learning goals for **Elevate** included:
- Gaining proficiency in **JavaScript** and understanding **DOM manipulation**.
- Writing clean, modular, and reusable code.
- Implementing **event listeners** to handle user interactions.
- Building dynamic HTML content with JavaScript.
- Strengthening debugging and troubleshooting skills.
-Deploy a static app using GitHub Pages.

### Wins + Challenges:

**Wins**

1. None
2. None
3. None

**Challenges**

1.	Dynamic Layout Adjustment
      - Struggled initially with using CSS flexbox to create a flexible layout for the “Unmotivational Posters” grid. Ensuring that the grid adapted to various screen widths without breaking the alignment required several iterations and debugging.
      - Possible Solution: Review flexbox documentation and apply gap, justify-content, and flex-wrap properties effectively to achieve the desired layout.
2.	Event Listener Conflicts
      - Encountered issues with overlapping event listeners, particularly with buttons triggering multiple unintended actions. This was caused by duplicate event listener assignments in the JavaScript code.
      - Possible Solution: Refactor the event listener assignments, ensuring each function was tied to a specific button only once. Utilize console logs and debugging tools to trace and resolve these issues.
3.	Styling Consistency
      - Maintaining a consistent visual style between different sections of the app (e.g., main page, saved posters, unmotivational posters) was challenging. Slight variations in button or grid styles created a disjointed experience.
      - Possible Solution: Consolidate CSS classes and reuse existing styles to ensure uniformity across all sections, while adding section-specific overrides where necessary.
4.	Image and Text Overflow
      - Faced issues with images and text overflowing their containers in smaller viewports, disrupting the layout.
      - Possible Solution: Apply max-width, height:auto, and text-align properties to ensure proper scaling and alignment. Add media queries to fine-tune the layout for smaller screens.
