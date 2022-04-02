#ifndef FENCODEGENERE_H
#define FENCODEGENERE_H
#include <QDialog>
#include <QWidget>
#include <QTextEdit>
#include <QVBoxLayout>
#include <QPushButton>
#include <QFont>
#include <QString>

class FenCodeGenere : public QDialog //herite de QDialog car la fenetre ne sert qu'a copier le texte
{

    Q_OBJECT //Il faudra aussi pour cette fenetre utiliser des slots et des sockets

public:
    FenCodeGenere(QString &code, QWidget *parent); //constructeur

private:
    QPushButton *m_bouton;
    QTextEdit *codeGenere;
};

#endif // FENCODEGENERE_H
