// login & register
const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../model/Profile");

//创建信息接口
router.post('/add', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const profile = await Profile.create(req.body)
        res.json({
            code: 0,
            data: profile
        })
    } catch (error) {
        res.json({ error: error })
    }
})

// 查询所有信息
router.get('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const profile = await Profile.find()
        res.json({
            code: 0,
            data: profile
        })
    } catch (error) {
        res.json({ error: error })
    }
})

// 查询单个信息
router.get('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id)
        res.json({
            code: 0,
            data: profile
        })
    } catch (error) {
        res.json({ error: error })
    }
})

//编辑信息接口
router.post('/edit/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        //更新文档，并返回更新后的文档
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({
            code: 0,
            data: profile
        })
    } catch (error) {
        res.json({ error: error })
    }
})

//编辑信息接口
router.delete('/delete/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        //更新文档，并返回更新后的文档
        const result = await Profile.findByIdAndDelete(req.params.id)
        if (result) {
            res.json({
                code: 0,
                data: result,
                msg: '删除成功'
            })
        } else {
            res.json({
                code: 1,
                data: result,
                msg: '删除失败'
            })
        }
    } catch (error) {
        res.json({ error: error })
    }
})

module.exports = router;
