<?php

namespace App\Repository;

use App\Entity\Stopover;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Stopover|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stopover|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stopover[]    findAll()
 * @method Stopover[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StopoverRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Stopover::class);
    }

    // /**
    //  * @return Stopover[] Returns an array of Stopover objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Stopover
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
