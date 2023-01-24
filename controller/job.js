const Job = require('../model/Job')
const express = require('express')
const multer = require('multer')
const { parse } = require('dotenv')
const upload = multer({ dest: 'uploads/' })


const index = async (req, res, next) => {

    try {
        let search_term = RegExp(req.query.search_term, "i")
        let salary_from = parseFloat(req.query.salary_from) || 0
        let salary_to = parseFloat(req.query.salary_to) || 999999999999999999
        let page = parseInt(req.query.page) || 1
        let per_page = parseInt(req.query.per_page) || 2

        let sort = {name: 1}
        let sort_by = req.query.sort

        switch (sort_by) {
            case "nameasc":
                sort = { name: 1 }
                break;
            case "namedesc":
                sort = { name: -1 }
                break;
            case "salaryasc":
                sort = { salary: 1 }
                break;
            case "salarydesc":
                sort = { salary: -1 }
                break;

            default:
                break;
        }

        let count = await Job.aggregate([

            {
                $match: {
                    $or: [{ name: search_term }, { category: search_term }, { job_level: search_term }, { location: search_term }]
                }
            },
            {
                $match: {
                    $and: [{ salary: { $gte: salary_from } }, { salary: { $lt: salary_to } }]
                }
            },
            {
                $sort: sort
            }
        ])
        let meta = {
            total: count.length,
            page,
            per_page

        }

        let jobs = await Job.aggregate([

            {
                $match: {
                    $or: [{ name: search_term }, { category: search_term }, { job_level: search_term }, { location: search_term }]
                }
            },
            {
                $match: {
                    $and: [{ salary: { $gte: salary_from } }, { salary: { $lt: salary_to } }]
                }
            },
            {
                $sort: sort
            },
            {
                $skip: ((page - 1) * per_page)
            },
            {
                $limit: per_page
            }
        ])
        res.send({
            data: jobs,
            meta
        })
    }
    catch (err) {
        next(err)
    }

}
const store = async (req, res, next) => {
    try {
        let images = req.files.map(el => el.filename)
        let job = await Job.create({
            ...req.body,
            images: images,
            created_by: req.body.name
        })
        res.send(job)
    }
    catch (err) {
        next(err)
    }
}
const update = async (req, res, next) => {
    try {
        let job = await Job.findByIdAndUpdate(req.params.id, { ...req.body }, {
            new: true
        })
        res.send(job)
    }
    catch (err) {
        next(err)
    }
}
const remove = async (req, res, next) => {
    try {
        let job = await Job.findByIdAndDelete(req.params.id)
        res.send(job)
    }
    catch (err) {
        next(err)
    }
}



module.exports = {
    index,
    store,
    update,
    remove
}