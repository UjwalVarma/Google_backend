// controllers/candidateController.js

const config = require('../config/config');
const Candidate = require('../models/Candidate');

// Controller function to create a new candidate
exports.createCandidate = async (req, res, next) => {
  const {
    email,
    firstName,
    middleName,
    lastName,
    contactNumber,
    alternateContactNumber,
    dateOfBirth,
    age,
    gender,
    maritalStatus,
    nationality,
    streetAddress,
    city,
    state,
    postalCode,
    country,
    hasPassport,
    passportNumber,
    aadhaarNumber,
    panNumber,
    drivingLicenseNumber,
    voterIdNumber,
    linkedInProfile,
    socialMediaProfiles,
    onlinePortfolio,
    skills,
    languages,
    educationCourse,
    educationSpecialization,
    educationInstitution,
    educationYearOfCompletion,
    educationPassPercentage,
    certifications,
    certificationsList,
    certificationIssuingAuthority,
    certificationCompletionDate,
    expectedJoiningDate,
    fresher,
    backgroundCheckConsent,
    drugAlcoholTestingConsent,
    criminalConvictionsDisclosure,
    acknowledgement
  } = req.body;

  try {
    const newCandidate = new Candidate({
      email,
      firstName,
      middleName,
      lastName,
      contactNumber,
      alternateContactNumber,
      dateOfBirth,
      age,
      gender,
      maritalStatus,
      nationality,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      hasPassport,
      passportNumber,
      aadhaarNumber,
      panNumber,
      drivingLicenseNumber,
      voterIdNumber,
      linkedInProfile,
      socialMediaProfiles,
      onlinePortfolio,
      skills,
      languages,
      educationCourse,
      educationSpecialization,
      educationInstitution,
      educationYearOfCompletion,
      educationPassPercentage,
      certifications,
      certificationsList,
      certificationIssuingAuthority,
      certificationCompletionDate,
      expectedJoiningDate,
      fresher,
      backgroundCheckConsent,
      drugAlcoholTestingConsent,
      criminalConvictionsDisclosure,
      acknowledgement
    });

    await newCandidate.save();

    res.status(201).json({
      success: true,
      message: 'Candidate details filled successfully',
      candidate: newCandidate,
    });
  } catch (error) {
    console.error('Failed to fill candidate details', error);
    next(error);
  }
};

// Controller function to get all candidates
exports.getAllCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    console.error('Failed to fetch candidates', error);
    next(error);
  }
};

// Controller function to get a single candidate by ID
exports.getCandidateById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ success: false, error: 'Candidate not found' });
    }
    res.status(200).json(candidate);
  } catch (error) {
    console.error(`Failed to fetch candidate with id ${id}`, error);
    next(error);
  }
};

// Controller function to update a candidate by ID
exports.updateCandidateById = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedCandidate) {
      return res.status(404).json({ success: false, error: 'Candidate not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Candidate updated successfully',
      candidate: updatedCandidate,
    });
  } catch (error) {
    console.error(`Failed to update candidate with id ${id}`, error);
    next(error);
  }
};

// Controller function to delete a candidate by ID
exports.deleteCandidateById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      return res.status(404).json({ success: false, error: 'Candidate not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Candidate deleted successfully',
      candidate: deletedCandidate,
    });
  } catch (error) {
    console.error(`Failed to delete candidate with id ${id}`, error);
    next(error);
  }
};
