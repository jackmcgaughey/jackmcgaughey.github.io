# Personal Website

A simple, minimal personal website featuring resume, projects, and blog sections. Built with HTML, CSS, and JavaScript for easy deployment on GitHub Pages.

## 🚀 Quick Start

### Viewing Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Deploying to GitHub Pages

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `username.github.io` (replace `username` with your GitHub username)
   - For example: `johndoe.github.io`

2. **Upload your files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/jackmcgaughey/jackmcgaughey.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at `https://username.github.io` in a few minutes

## 📝 Customizing Your Site`

### Update Your Information

1. **Homepage** (`index.html`)
   - Replace `[Your Name]` with your actual name
   - Add your tagline/role in the subtitle
   - Write your introduction in the intro section
   - Add social media links in the footer

2. **Resume Page** (`resume.html`)
   - Fill in your education details
   - Add your work experience
   - List your skills by category
   - Optionally add certifications or awards

3. **Projects Page** (`projects.html`)
   - Duplicate the project card template for each project
   - Add project images to the `images/` folder
   - Update project titles, descriptions, and links
   - Add relevant technology tags

4. **Blog Page** (`blog.html`)
   - Add new blog post previews
   - Create new blog post files in the `blog/` folder
   - Use `blog/sample-post.html` as a template

### Adding Images

- Place all images in the `images/` folder
- Reference them in your HTML: `<img src="images/your-image.jpg" alt="Description">`
- Supported formats: JPG, PNG, GIF, WebP

### Adding Blog Posts

1. Copy `blog/sample-post.html` to a new file (e.g., `blog/my-new-post.html`)
2. Update the content, title, and date in the new file
3. Add a preview in `blog.html` linking to your new post

### Styling

- All styles are in `css/style.css`
- The design is minimal and clean by default
- Colors can be customized by changing:
  - Primary color: `#0066cc` (blue links and accents)
  - Text color: `#333` (main text)
  - Background: `#fff` (white) and `#f9f9f9` (light gray)

## 📁 File Structure

```
/
├── index.html          # Homepage
├── resume.html         # Resume/CV page
├── projects.html       # Projects showcase
├── blog.html           # Blog listing
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript for navigation
├── blog/
│   └── sample-post.html # Sample blog post (template)
├── images/
│   └── .gitkeep        # Place your images here
└── README.md           # This file
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, minimal interface
- ✅ No build tools or dependencies required
- ✅ Mobile-friendly navigation
- ✅ SEO-friendly with meta tags
- ✅ Easy to customize
- ✅ Fast loading

## 🔧 Technical Details

- **HTML5** for structure
- **CSS3** for styling (Flexbox and Grid)
- **Vanilla JavaScript** for interactivity
- **No frameworks or libraries required**

## 📱 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 💡 Tips

- Keep your content concise and focused
- Use high-quality images (but optimize file sizes)
- Update your blog regularly to keep the site fresh
- Add your own personality to the content
- Consider adding a custom domain later (optional)

## 📄 License

Feel free to use this template for your personal website.

## 🤝 Need Help?

If you need to make changes or have questions:
1. Each HTML file has comments showing where to add your content
2. The CSS is organized by section for easy editing
3. The JavaScript is minimal and well-commented

---

**Ready to launch?** Follow the deployment steps above and your site will be live in minutes!

add links that connect to my projects. add a link to videos of my speeches for self competitive policy optimization and the mario RL agent. this is just a link to google drive video

make links open in new tab, add city for work next to place, add link to google scholar page

add all of my socials on the resume page to the others. 