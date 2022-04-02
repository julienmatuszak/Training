#include <QApplication>
#include <QPushButton>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QPushButton bouton("Pimp mon bouton !");
    bouton.setFont(QFont("Comic sans MS", 20, QFont::Bold, true));
    bouton.setCursor(Qt::PointingHandCursor);
    bouton.setIcon(QIcon("C:/QT/smile.png"));
    bouton.setToolTip("Texte d'aide");
    bouton.show();

    return app.exec();
}
