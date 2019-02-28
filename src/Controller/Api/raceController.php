<?php

namespace App\Controller\Api;

use App\Entity\Race;
use App\Service\HashGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/race", name="api")
 */
class raceController extends AbstractController
{
    /**
     * @Route("/create", name="app.race.create")
     */
    public function create(HashGenerator $hashGenerator)
    {
        $em = $this->getDoctrine()->getManager();


        $race = new Race();
        $race->setPublicAccesToken($hashGenerator->generatePublicHash());
        $race->setPrivateAccessCode($hashGenerator->generatePrivateHash());

        $em->persist($race);
        $em->flush();

        return $this->json([
            'status' => 'ok',
            'data' => [
                'privateAccessCode' => $race->getPrivateAccessCode()
            ],
        ]);
    }
}
