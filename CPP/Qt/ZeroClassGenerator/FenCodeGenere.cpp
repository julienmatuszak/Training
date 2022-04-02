#include "FenCodeGenere.h"

FenCodeGenere::FenCodeGenere(QString &code, QWidget *parent = 0) : QDialog(parent)
{
    this->setWindowIcon(QIcon("Icon.png"));
    this->setWindowTitle("Zero Class Generator");

    codeGenere = new QTextEdit();
   // info->append(&code);
    codeGenere->setPlainText(code);
    codeGenere->setReadOnly(true);
    codeGenere->setFont(QFont("Courier"));
    QVBoxLayout *vbox = new QVBoxLayout;
    m_bouton = new QPushButton("Fermer", this);
    vbox->addWidget(codeGenere);
    vbox->addWidget(m_bouton);
    this->setLayout(vbox);

    QObject::connect(m_bouton, SIGNAL(clicked()), this, SLOT(close()));
}
