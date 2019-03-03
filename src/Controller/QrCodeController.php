<?php

namespace App\Controller;

use App\Service\HashGenerator;
use Endroid\QrCode\Response\QrCodeResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Endroid\QrCode\QrCode;

class QrCodeController extends AbstractController
{
    /**
     * @Route("/qr/generate", name="qr_code_generate")
     */
    public function index(HashGenerator $hashGenerator)
    {
        $qrCode = new QrCode($hashGenerator->generateQrHash());

        // Save it to a file
        $qrCode->writeFile(__DIR__.'/qrcode.png');

        // Create a response object
        $response = new QrCodeResponse($qrCode);

        return $response;

/*
        return $this->render('qr_code/index.html.twig', [
            'controller_name' => 'QrCodeController',
        ]);*/
    }
}
