const Lecture = require("./models")

module.exports = {

    getAllLectures: function(req, res) {
        Lecture.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getOneLecture: function(req, res) {
        Lecture.findById(req.params.id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    newLecture: function(req, res) {
        var lecture = new Lecture(req.body);  
        lecture.save() 
            .then(data => {
                console.log("new success", data)
                res.json(data);
            })
            .catch(err => {
                console.log("new error", err)
                res.json(err);
            })
    },
    
    editLecture: function(req, res) {
            Lecture.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    deleteLecture: function(req, res) {
            Lecture.findByIdAndDelete(req.params.id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
        },

    getAllStudents: function(req, res) {
        Lecture.findById(req.params.lectureid)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getOneStudent: function(req, res) {
        Lecture.findById(req.params.lectureid)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    newStudent: function(req, res) {
        const lecture_id = req.params.lectureid
        const student = {$push: { students: [req.body]}};
        Lecture.findByIdAndUpdate(lecture_id, student, {new: true, runValidators: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
        }, 

    editStudent: function(req, res) {
        const student = {$set: { students: {_id: req.params.studentid}}};
        Lecture.findByIdAndUpdate(req.params.lectureid, student, {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
        },

    deleteStudent: function(req, res) {
        const student = {$pull: { students: {_id: req.params.studentid}}};
        Lecture.findByIdAndUpdate(req.params.lectureid, student, {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getAllInstructors: function(req, res) {
        Lecture.findById(req.params.lectureid)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getOneInstructor: function(req, res) {
        Lecture.findById(req.params.lectureid)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    newInstructor: function(req, res) {
        const lecture_id = req.params.lectureid
        const instructor = {$push: { instructors: [req.body]}};
        Lecture.findByIdAndUpdate(lecture_id, instructor, {new: true, runValidators: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
        }, 

    editInstructor: function(req, res) {
        const lecture_id = req.params.lectureid
        const instructor = {$set: { instructors: {_id: req.params.instructorid}}};
        Lecture.findByIdAndUpdate(lecture_id, instructor, {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    deleteInstructor: function(req, res) {
        const lecture_id = req.params.lectureid
        const instructor = {$pull: { instructors: {_id: req.params.instructorid}}};
        Lecture.findByIdAndUpdate(lecture_id, instructor, {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },

    newComment: function(req, res) {
        const lecture_id = req.params.lectureid
        const comment = {$push: { comments: [req.body]}};
        Lecture.findByIdAndUpdate(lecture_id, comment, {new: true, runValidators: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
        }, 


    deleteComment: function(req, res) {
        const comment = {$pull: { comments: {_id: req.params.commentid}}};
        Lecture.findByIdAndUpdate(req.params.lectureid, comment, {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    }
}