# HealthEd AI  🏥🤖

An AI-powered healthcare application that transforms complex medical terminology into easy-to-understand language, bridging the gap between medical professionals and patients through advanced Natural Language Processing. [Link](https://health-made-simple-powered-by-ai.netlify.app/)

## 🌟 Features

### Core Functionality
- **Medical Text Simplification**: Converts complex medical jargon into patient-friendly language using ClinicalBERT
- **Dual-Mode Interface**: Tailored experiences for both patients and medical students
- **Medication Information System**: Comprehensive drug interaction data and side effects
- **Educational Content**: Detailed medical explanations for learning purposes

### Key Capabilities
- Advanced NLP processing with ClinicalBERT and MedQuAD models
- Real-time medical terminology translation
- Drug interaction checker
- Side effect information database
- Accuracy preservation for critical health information

## 🛠️ Tech Stack

### Frontend
- **React JS** - Modern, responsive user interface
- **JavaScript/JSX** - Interactive components
- **CSS3** - Styling and animations

### Backend
- **Flask** - Python web framework
- **ClinicalBERT** - Medical language processing model
- **MedQuAD** - Medical question-answering dataset
- **Python** - Backend logic and API endpoints

### AI/ML Models
- **ClinicalBERT** - Specialized BERT model for clinical text
- **Natural Language Processing** - Text analysis and simplification
- **MedQuAD Dataset** - Medical knowledge base

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healtherai-2.git
   cd healtherai-2
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Flask API**
   ```bash
   cd backend
   python app.py
   ```
   The API will be available at `http://localhost:5000`

2. **Start the React Frontend**
   ```bash
   cd frontend
   npm start
   ```
   The application will open at `http://localhost:3000`

## 📁 Project Structure

```
healtherai-2/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PatientView/
│   │   │   ├── StudentView/
│   │   │   ├── MedicationInfo/
│   │   │   └── TextSimplifier/
│   │   ├── services/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── app.py
│   ├── models/
│   │   ├── clinical_bert.py
│   │   └── medquad_processor.py
│   ├── routes/
│   │   ├── simplify.py
│   │   └── medication.py
│   ├── utils/
│   └── requirements.txt
├── models/
│   ├── clinicalbert/
│   └── medquad/
└── README.md
```

## 🎯 Usage

### For Patients
1. Enter medical text or terminology in the input field
2. Select "Patient Mode" for simplified explanations
3. Get easy-to-understand interpretations of medical information
4. Check medication interactions and side effects

### For Medical Students
1. Switch to "Student Mode" for detailed explanations
2. Access comprehensive medical terminology breakdowns
3. Study drug interactions and mechanisms
4. Learn from detailed educational content

## 🔧 API Endpoints

### Text Simplification
```
POST /api/simplify
{
  "text": "Medical text to simplify",
  "mode": "patient" | "student"
}
```

### Medication Information
```
GET /api/medication/{drug_name}
POST /api/check-interactions
{
  "medications": ["drug1", "drug2"]
}
```

## 🧠 AI Models

### ClinicalBERT
- Specialized BERT model trained on clinical text
- Handles medical terminology with high accuracy
- Preserves critical health information during simplification

### MedQuAD Integration
- Medical Question Answering Dataset
- Provides context-aware responses
- Supports educational content generation

## 🎨 User Interface

### Patient Mode
- Clean, intuitive design
- Large, readable fonts
- Simplified navigation
- Color-coded importance levels

### Student Mode
- Detailed information panels
- Interactive learning modules
- Advanced search capabilities
- Reference materials integration

## 🧪 Testing

### Backend Tests
```bash
cd backend
python -m pytest tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint for JavaScript code
- Write tests for new features
- Update documentation as needed

## 📋 Requirements

### Backend Dependencies
```
flask==2.3.0
transformers==4.21.0
torch==1.12.0
pandas==1.5.0
numpy==1.23.0
scikit-learn==1.1.0
requests==2.28.0
```

### Frontend Dependencies
```
react==18.2.0
axios==0.27.0
react-router-dom==6.3.0
material-ui/core==5.10.0
```

## 🔒 Privacy & Security

- Patient data is processed locally when possible
- HIPAA compliance considerations implemented
- Secure API endpoints with rate limiting
- No storage of sensitive medical information

## 📈 Performance

- Optimized React components for fast rendering
- Efficient NLP model loading and caching
- Responsive design for all device sizes
- API response times under 2 seconds

## 🐛 Known Issues

- Model loading may take 30-60 seconds on first startup
- Some rare medical terms may not be in the training dataset
- Internet connection required for full functionality

## 📞 Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Email: [your-email@example.com]
- Documentation: [Link to detailed docs]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- ClinicalBERT model creators
- MedQuAD dataset contributors
- Healthcare professionals who provided feedback
- Open source community

## 🚀 Future Enhancements

- [ ] Multi-language support
- [ ] Voice input/output capabilities
- [ ] Mobile app development
- [ ] Integration with EHR systems
- [ ] Offline mode functionality
- [ ] Advanced visualization tools

---

**⚠️ Disclaimer**: This application is for educational and informational purposes only. Always consult with qualified healthcare professionals for medical advice and treatment decisions.
