# Setup Guide

## Adding Project Images

To add images from your portfolio PDF, follow these steps:

1. **Extract images from PDF**: Use a PDF viewer or online tool to extract the project images
2. **Save images**: Save them with the following names in the `public/images/` directory:
   - `flipkart-seller-hub.jpg` (or .png)
   - `aum-pharmacy.jpg` (or .png)
   - `shopsy.jpg` (or .png)

3. **Recommended image specifications**:
   - Format: JPG or PNG
   - Recommended size: 1200x600px or larger
   - Aspect ratio: 2:1 (landscape)
   - File size: Optimize to under 500KB for better performance

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Add your images to `public/images/` directory

3. Run the development server:
```bash
npm run dev
```

4. Visit `http://localhost:3000` to see your portfolio

## Image Placeholders

If images are not available, the website will display a placeholder message. You can add images at any time and they will automatically appear.

## Customization

- **Project Data**: Edit `data/projects.ts` to modify project information
- **Skills**: Edit `data/skills.ts` to update your skills
- **Tools**: Edit `data/tools.ts` to update tools you use
- **Colors**: Modify `tailwind.config.ts` for theme customization

