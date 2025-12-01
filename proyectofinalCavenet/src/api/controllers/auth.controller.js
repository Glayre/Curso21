import authService from '../services/auth.service.js';

export async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

export async function requestAccessCode(req, res, next) {
  try {
    const ok = await authService.requestAccessCode(req.body);
    res.json({ success: ok });
  } catch (err) {
    next(err);
  }
}

export async function verifyAccessCode(req, res, next) {
  try {
    const token = await authService.verifyAccessCode(req.body);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}
