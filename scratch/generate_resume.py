import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=24,
        leading=28,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#1E3A8A'),
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151'),
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1E3A8A'),
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1F2937'),
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1F2937'),
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2
    )

    story = []

    # Title
    story.append(Paragraph("<b>TEJASWINI Y</b>", title_style))
    story.append(Paragraph("+91 9036877702 &nbsp;•&nbsp; tejaswini.y2004teju@gmail.com &nbsp;•&nbsp; LinkedIn &nbsp;•&nbsp; GitHub &nbsp;•&nbsp; Bengaluru, Karnataka", contact_style))

    def add_section_header(title):
        story.append(Paragraph(f"<b>{title}</b>", section_heading))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#93C5FD'), spaceBefore=1, spaceAfter=5))

    # Summary
    add_section_header("Summary")
    summary_text = (
        "AI & Machine Learning graduate with hands-on experience in machine learning, deep learning, NLP, "
        "Generative AI, and predictive modeling. Passionate about AI research, model experimentation, and developing "
        "intelligent systems using Python, DevOps, Google Gemini Ai, Django, Git, TensorFlow, PyTorch, and Scikit-learn. "
        "Interested in contributing to AI research through experimentation, model evaluation, and innovative problem-solving."
    )
    story.append(Paragraph(summary_text, body_style))

    # Education
    add_section_header("Education")
    edu_text = (
        "<table width='100%'><tr>"
        "<td><b>Acharya Institute of Technology</b>, Bengaluru</td>"
        "<td align='right'>2022–2026</td>"
        "</tr><tr>"
        "<td>B.E. in Artificial Intelligence & Machine Learning</td>"
        "<td align='right'><b>CGPA: 8.49/10</b></td>"
        "</tr></table>"
    )
    story.append(Paragraph(edu_text, body_style))

    # Technical Skills
    add_section_header("Technical Skills")
    skills = [
        ("Programming", "Python, C, C++"),
        ("Data Science & AI", "Machine Learning, Deep Learning, NLP"),
        ("Databases & Backend", "SQL, MongoDB, Django"),
        ("Data Visualization", "Power BI, Tableau"),
        ("Tools", "Git, GitHub, Jupyter Notebook, Google Colab, DevOps"),
        ("Office Tools", "Microsoft Excel, Word, PowerPoint"),
        ("Soft Skills", "Teamwork, Communication, Problem Solving, Time Management")
    ]
    for category, items in skills:
        story.append(Paragraph(f"<b>{category}:</b> {items}", bullet_style))

    # Experience
    add_section_header("Experience")
    exp_header = (
        "<table width='100%'><tr>"
        "<td><b>Mindset IT Solutions</b> - <i>Full Stack Developer</i></td>"
        "<td align='right'>Bengaluru</td>"
        "</tr></table>"
    )
    story.append(Paragraph(exp_header, body_style))
    story.append(Paragraph("• Built responsive full-stack web applications using frontend and backend technologies.", bullet_style))
    story.append(Paragraph("• Collaborated with the team to build, test, debug, and deploy web application features.", bullet_style))

    # Selected Projects
    add_section_header("Selected Projects")
    
    # Project 1
    story.append(Paragraph("• <b>Sustainable Energy Forecasting & Automated Alert System (SDG-7)</b>", body_style))
    story.append(Paragraph("<b>Tech Stack:</b> Python, Django, Machine Learning, Random Forest, Pandas, Plotly, Data Visualization", bullet_style))
    p1_desc = (
        "Conducted comparative research on seven machine learning algorithms for sustainable energy forecasting. "
        "Evaluated models using MSE and R² metrics to identify the most accurate forecasting approach. "
        "Developed an AI-powered dashboard with automated alert generation for SDG-7 monitoring."
    )
    story.append(Paragraph(p1_desc, bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    story.append(Paragraph("• <b>Gen AI Synthetic Customer & Pricing Scenario Simulator</b>", body_style))
    story.append(Paragraph("<b>Tech Stack:</b> Python, Chart.js, Streamlit, Pandas, Plotly, ReportLab, OpenPyXL", bullet_style))
    p2_desc = (
        "Developed an AI-powered pricing and revenue scenario simulator tailored for the Indian SaaS market using "
        "Google Gemini API, JavaScript (ES6), and Python (Streamlit/Pandas). Features interactive Monte Carlo customer persona "
        "simulations, real-time price elasticity analytics with dynamic Chart.js/Plotly charts, and automated executive "
        "PDF report generation."
    )
    story.append(Paragraph(p2_desc, bullet_style))

    # Leadership & Activities
    add_section_header("Leadership & Activities")
    story.append(Paragraph("• <b>Utkarsh-Rhythmanya</b> - Acharya Folk dance team Head", bullet_style))
    story.append(Paragraph("• <b>Utkarsh-Abhinaya Theatre Club</b> - National & State-level participant and winner", bullet_style))
    story.append(Paragraph("• <b>Acharya Kannada Vedike</b> - Member", bullet_style))

    # Certifications
    add_section_header("Certifications")
    certs = [
        "Google Data Analytics Professional Certificate",
        "Career Essentials in Generative AI (Microsoft & LinkedIn)",
        "IBM - AI Engineering",
        "Data Engineering Foundations Professional Certificate",
        "Infosys Power BI & Infosys Tableau",
        "Machine Learning with Python",
        "Power BI Workshop Certificates"
    ]
    for cert in certs:
        story.append(Paragraph(f"• {cert}", bullet_style))

    doc.build(story)
    print(f"Successfully generated PDF at {output_path}")

if __name__ == "__main__":
    output_pdf = r"d:\Portfolio_Teju\public\Tejaswini_Y_Resume.pdf"
    create_resume(output_pdf)
