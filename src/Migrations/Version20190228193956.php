<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190228193956 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE app_race (id INT AUTO_INCREMENT NOT NULL, public_acces_token VARCHAR(255) NOT NULL, private_access_code VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stopover (id INT AUTO_INCREMENT NOT NULL, race_id INT NOT NULL, image VARCHAR(255) DEFAULT NULL, hint VARCHAR(255) DEFAULT NULL, qr_code VARCHAR(255) DEFAULT NULL, INDEX IDX_CA129C276E59D40D (race_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE stopover ADD CONSTRAINT FK_CA129C276E59D40D FOREIGN KEY (race_id) REFERENCES app_race (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE stopover DROP FOREIGN KEY FK_CA129C276E59D40D');
        $this->addSql('DROP TABLE app_race');
        $this->addSql('DROP TABLE stopover');
    }
}
