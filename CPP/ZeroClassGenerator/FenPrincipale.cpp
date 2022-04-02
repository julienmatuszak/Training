#include "FenPrincipale.h"
#include "FenCodeGenere.h"

FenPrincipale::FenPrincipale() : QWidget()
{
    this->setWindowIcon(QIcon("Icon.png"));
    this->setWindowTitle("Zero Class Generator");

    m_bouton1 = new QPushButton("Générer !", this);
    m_bouton2 = new QPushButton("Quitter", this);

    QVBoxLayout *vbox = new QVBoxLayout;
    QHBoxLayout *hbox = new QHBoxLayout;
    QGroupBox *groupBox1 = new QGroupBox(tr("Définition de la classe"));
    QGroupBox *groupBox2 = new QGroupBox(tr("Options"));
    groupBox3 = new QGroupBox(tr("Ajouter des commentaires"));

    nom = new QLineEdit;
    classeMere = new QLineEdit;
    QFormLayout *formulaire1 = new QFormLayout;
    formulaire1->addRow("&Nom :", nom);
    formulaire1->addRow("Classe &mère :", classeMere);
    groupBox1->setLayout(formulaire1);

    QVBoxLayout *vbox1 = new QVBoxLayout;
    case1 = new QCheckBox(tr("Protéger le &header contre les inclusions multiples"));
    case2 = new QCheckBox(tr("Générer un &constructeur par défaut"));
    case3 = new QCheckBox(tr("Générer un &destructeur"));
    case1->setChecked(true);
    case2->setChecked(true);
    vbox1->addWidget(case1);
    vbox1->addWidget(case2);
    vbox1->addWidget(case3);
    groupBox2->setLayout(vbox1);

    groupBox3->setCheckable(true);
    groupBox3->setChecked(true);
    auteur = new QLineEdit;
    dateCreation = new QDateEdit;
    roleClasse = new QTextEdit;
    QFormLayout *formulaire2 = new QFormLayout;
    formulaire2->addRow("&Auteur :", auteur);
    formulaire2->addRow("Da&te de création :", dateCreation);
    formulaire2->addRow("&Rôle de la classe :", roleClasse);
    groupBox3->setLayout(formulaire2);

    vbox->addWidget(groupBox1);
    vbox->addWidget(groupBox2);
    vbox->addWidget(groupBox3);
    hbox->addWidget(m_bouton1);
    hbox->addWidget(m_bouton2);
    hbox->setAlignment(Qt::AlignRight);
    vbox->addLayout(hbox);
    this->setLayout(vbox);

    QObject::connect(this->pushButton(), SIGNAL(clicked()), this, SLOT(genererCode()));
    QObject::connect(m_bouton2, SIGNAL(clicked()), qApp, SLOT(quit()));
}

QPushButton* FenPrincipale::pushButton() const{
    return m_bouton1;
}

void FenPrincipale::genererCode() {
    QString code;
    if (groupBox3->isChecked())
    {
        code.append("/*\n");
        code.append("Auteur : "+auteur->text()+"\n");
        code.append("Date de création : "+dateCreation->text()+"\n");
        code.append("\nRôle :\n"+roleClasse->toPlainText()+"\n*/\n\n\n");
    }
    if (case1->isChecked() && !case2->isChecked())
    {
        code.append("#ifndef HEADER_"+nom->text().toUpper()+"\n#define HEADER_"+nom->text().toUpper()+"\n\n\n#endif");
    }
    if (case1->isChecked() && case2->isChecked())
    {
        code.append("#ifndef HEADER_"+nom->text().toUpper()+"\n#define HEADER_"+nom->text().toUpper()+"\n\nclass "+nom->text()+" : "+"public "+classeMere->text()+"\n{\n\tpublic:\n\t\t"+nom->text()+"();\n\n\n\tprotected:\n\n\n\tprivate:\n};"+"\n\n#endif");
    }
    if (!case1->isChecked() &&
            case2->isChecked())
    {
        code.append("class "+nom->text()+" : "+"public "+classeMere->text()+"\n{\n\tpublic:\n\t\t"+nom->text()+"();\n\n\n\tprotected:\n\n\n\tprivate:\n};");
    }
    FenCodeGenere *fenCodeGenere = new FenCodeGenere(code, this);
    fenCodeGenere->exec();
}
