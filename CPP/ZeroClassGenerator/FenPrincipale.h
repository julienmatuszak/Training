#ifndef FENPRINCIPALE_H
#define FENPRINCIPALE_H
#include <QApplication>
#include <QWidget>
#include <QIcon>
#include <QPushButton>
#include <QGroupBox>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QLineEdit>
#include <QFormLayout>
#include <QCheckBox>
#include <QDateEdit>
#include <QTextEdit>
#include <QString>
#include <QInputDialog>

class FenPrincipale : public QWidget /*pour dire que la classe FenPrincipale herite de QWidget et recupere ses proprietes*/
{
    Q_OBJECT /*necessaire pour indiquer les signals et les slots (une nouvelle fenetre va s'ouvrir a partir du widget*/

public:
    FenPrincipale();/*constructeur*/
    QPushButton* pushButton() const;

private slots:
    void genererCode();

private:
    QLineEdit *nom;
    QLineEdit *classeMere;
    QLineEdit *auteur;
    QDateEdit *dateCreation;
    QTextEdit *roleClasse;
    QCheckBox *case1;
    QCheckBox *case2;
    QCheckBox *case3;
    QGroupBox *groupBox3;
    QPushButton *m_bouton1;
    QPushButton *m_bouton2;
};

#endif // FENPRINCIPALE_H
