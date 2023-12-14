function authentication(req, res, next) {
    const { email, password } = req.body;

    const epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const echeck = epattern.test(email);

    const ppattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

    const pcheck = ppattern.test(password);

    if (echeck && pcheck) {
        next();
    }
}

module.exports = authentication;
