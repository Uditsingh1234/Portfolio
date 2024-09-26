const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Course } = require('../models/portfolioModel'); // Correct destructuring

const User = require('../models/userModel')

// get all porfolio data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find(); // Use find() if you expect multiple records
        const abouts = await About.find(); // Use find() here as well
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intros: intros[0], // Assuming you're only expecting one record
            abouts: abouts[0],
            projects: projects,
            contacts: contacts[0],
            experiences: experiences,
            courses: courses
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true });
        res.status(200).send({
            data: intro,
            success: true,
            message: 'Intro updated successfully.'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update About:
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true });
        res.status(200).send({
            data: about,
            success: true,
            message: 'about updated successfully.'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// On experience section
router.post("/add-experience", async (req, res) => { // Corrected route spelling
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience added successfully.'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update experience
router.put("/update-experience", async (req, res) => { // Corrected route spelling
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience updated successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete experience

router.delete("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.body._id); // No need for an object inside
        if (!experience) {
            return res.status(404).send({
                success: false,
                message: 'Experience not found.',
            });
        }
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience deleted successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// add project

router.post("/add-project", async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(200).send({
        data: project,
        success: true,
        message: 'Project added successfully.',
      });
    } catch (error) {
      console.error("Error in /add-project:", error); // Log the exact error
      res.status(500).send({
        success: false,
        message: 'Failed to add project.',
        error: error.message,  // Send the error message back for easier debugging
      });
    }
  });
  


//update project 

router.put("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project updated successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete project

router.delete("/delete-project", async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete({_id: req.body._id});
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project deleted successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});



// add course
router.post("/add-course", async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(200).send({
        data: course,
        success: true,
        message: 'Course added successfully.',
      });
    } catch (error) {
      console.error("Error in /add-course:", error); // Log the exact error
      res.status(500).send({
        success: false,
        message: 'Failed to add course.',
        error: error.message,  // Send the error message back for easier debugging
      });
    }
  });


//update course
router.put("/update-course", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course updated successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete course
router.delete("/delete-course", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete({_id: req.body._id});
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course deleted successfully.',
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update contact
router.post('/update-contact', async (req, res) => {
    try {
        const intro = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true });
        res.status(200).send({
            data: intro,
            success: true,
            message: 'Contact updated successfully.'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


//admin login
router.post("/admin-login", async (req, res) => {
    try {
        // Find the user by username first
        const user = await User.findOne({ username: req.body.username, password : req.body.password });
        user.password = " ";
        if (user) {
            return res.status(200).send({
                data: user,
                success: true,
                message: 'Login successful.'
            });
        }
         else {
            return res.status(200).send({
                data: user,
                success: false,
                message: 'Invalid username and password.'
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
