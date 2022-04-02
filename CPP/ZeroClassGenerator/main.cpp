#include <QApplication>
#include "FenPrincipale.h"
#include "FenCodeGenere.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    FenPrincipale fenPrincipale;

    fenPrincipale.show();

    return app.exec();
}
