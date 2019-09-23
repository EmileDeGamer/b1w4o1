Main()
function Main(){
    log("Het gevaarlijke angstaanjagende doolhof")
    let keuze = prompt('Welkom in het meest dodelijke doolhof allertijden er is maar 1 uitweg, maar als u de verkeerde keuze maakt bent u DOOD.\nWelk pad wilt u eerst volgen?:', 'A: Het linker pad/B: Het rechter pad')
    if(keuze == "A" || keuze == "a"){
        log("linker pad")
        keuze = prompt('U heeft het linker pad gekozen:\nDeze kant leid naar 1 van de meest gevaarlijke trappen ter wereld.\nWilt u de linker of de rechter trap opgaan?:', 'A: Linker trap/B: Rechter trap')
        if (keuze == "A" || keuze == "a"){
            log("linker trap")
            keuze = prompt('U heeft de linker trap gekozen:\nDeze trap leid u naar een gevaarlijk gebouw waar monsters leven. Om ervoor te zorgen dat de monsters u niks doen, moet u eten voor ze zoeken in het gebouw, namelijk appels.\nWaar wilt u beginnen met zoeken?:', 'A: Beneden/B: Boven')
            if (keuze == "A" || keuze == "a"){
                log("beneden")
                keuze = prompt('U heeft gekozen voor beneden:\nHelaas de appels liggen niet hier, maar pas op! De monsters krijgen meer honger!\nWaar wilt u nu zoeken?:', 'A: Kelder/B: Boven')
                if (keuze == "A" || keuze == "a"){
                    log("kelder")
                    keuze = prompt('U heeft gekozen voor de kelder:\nSuper, u heeft de appels gevonden. Geef de appels snel aan de monsters, zodat ze u niks doen! :D\nWat wilt u met de appels doen?:', 'A: Aan de monsters geven/B: Zelf opeten')
                    if (keuze == "A" || keuze == "a"){
                        log("appels")
                        keuze = prompt('U heeft de appels aan de monsters gegeven:\nDe monsters zijn nu weer voldoende gevoed en laten u nu verder gaan! :D\nWelke richting wilt u op?:', 'A: Links/B: Rechts')
                        if (keuze == "A" || keuze == "a"){
                            log("links")
                            keuze = prompt('U heeft voor links gekozen:\nDat is toevallig: De uitgang! :) Maar zo snel speelt u dit spel niet! ;) Los eerst het extreem ingewikkelde raadsel op!\nHoeveel appels heeft u over, als u 3 appels heeft, maar er 1 opeet en 5 onderweg vindt:', 'Antwoord:')
                            if (keuze == "7"){
                                log("goed antwoord")
                                keuze = prompt('U heeft het goede antwoord gegeven:\nU heeft zojuist het spel uitgespeeld! Gefeliciteerd! :D\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                                if(keuze == "A" | "a"){
                                    Main()
                                }
                                else if (keuze == "B" | "b"){
                                    window.close()
                                }
                            }
                            else if (keuze > 7 || keuze < 7){
                                log("verkeerd antwoord")
                                keuze = prompt('U heeft het verkeerde antwoord gegeven:\nHelaas u bent dood gegaan door het verkeerde antwoord optegeven, waardoor u bent opgegeten door een monster, die u was gevolgd!? :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                                if(keuze == "A" | "a"){
                                    Main()
                                }
                                else if (keuze == "B" | "b"){
                                    window.close()
                                }
                            }
                        }
                        else if (keuze == "B" || keuze == "b"){
                            log("rechts")
                            keuze = prompt('U heeft voor rechts gekozen:\nHelaas u bent in een ravijn gevallen! :(\nDit deed zoveel pijn, dat u bent overleden! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                            if(keuze == "A" | "a"){
                                Main()
                            }
                            else if (keuze == "B" | "b"){
                                window.close()
                            }
                        }
                    }
                    else if(keuze == "B" || keuze == "b"){
                        log("appels opgegeten")
                        keuze = prompt('U heeft de appels zelf opgegeten:\nHelaas, u bent opgegeten door de monsters! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                        if(keuze == "A" | "a"){
                            Main()
                        }
                        else if (keuze == "B" | "b"){
                            window.close()
                        }
                    }
                }
                else if (keuze == "B" || keuze == "b"){
                    log("boven")
                    keuze = prompt('U heeft gekozen voor boven:\nHelaas de appels liggen niet hier, zoek nog even goed verder. De monsters kunnen niet lang meer wachten, schiet op!\nWaar wilt u nu zoeken?:', 'A: Kelder/B: Zolder')
                    if (keuze == "A" || keuze == "a"){
                        log("kelder")
                        keuze = prompt('U heeft gekozen voor de kelder:\nSuper u heeft de appels gevonden. Geef ze snel aan de monsters, zodat ze u niks doen! :D\nWat wilt u met de appels doen?:', 'A: Aan de monsters geven/B: De appels tegen de monsters aangooien')
                        if (keuze == "A" || keuze == "a"){
                            log("appels geven")
                            keuze = prompt('U heeft de appels aan de monsters gegeven:\nHelaas, u bent opgegeten door de monsters, doordat het te lang duurde voordat u de appels bracht, waardoor de appels zijn gaan rotten! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                            if(keuze == "A" || keuze == "a"){
                                Main()
                            }
                            else if (keuze == "B" || keuze == "b"){
                                window.close()
                            }
                        }
                        else if (keuze == "B" || keuze == "b"){
                            log("appels gooien")
                            keuze = prompt('U heeft de appels tegen de monsters aangegooid:\nHelaas, u heeft de monsters boos gemaakt, waardoor ze u hebben opgegeten! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                            if(keuze == "A" || keuze == "a"){
                                Main()
                            }
                            else if (keuze == "B" || keuze == "b"){
                                window.close()
                            }
                        }
                    }
                    else if (keuze == "B" || keuze == "b"){
                        log("zolder")
                        keuze = prompt('U heeft gekozen voor de zolder:\nOh oh, u heeft zojuist de baas van de monsters wakker gemaakt, waardoor u bent vernietigd dankzij zijn sterke aanvallen! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                        if(keuze == "A" || keuze == "a"){
                            Main()
                        }
                        else if (keuze == "B" || keuze == "b"){
                            window.close()
                        }
                    }
                }
            }
            else if (keuze == "B" || keuze == "b"){
                log("boven")
                keuze = prompt('U heeft gekozen voor boven:\nHelaas de appels liggen hier niet! :(\n De monsters hebben honger, schiet op! :(\nWaar wilt u nu zoeken?:', 'A: Dak/B: Schoorsteen')
                if(keuze == "A" || keuze == "a"){
                    log("dak")
                    keuze = prompt('U heeft gekozen voor het dak:\nHelaas, de appels liggen ook niet hier. O nee u bent uitgegleden op het dak, waardoor u uw nek heeft gebroken! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" || keuze == "a"){
                        Main()
                    }
                    else if (keuze == "B" || keuze == "b"){
                        window.close()
                    }
                }
                else if(keuze == "B" || keuze == "b"){
                    log("schoorsteen")
                    keuze = prompt('U heeft gekozen voor de schoorsteen:\nHelaas de appels liggen ook niet in de schoorsteen! :( Oh oh, u bent vast komen te zitten in de schoorsteen, waardoor u niet meer verder kunt! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" || keuze == "a"){
                        Main()
                    }
                    else if (keuze == "B" || keuze == "b"){
                        window.close()
                    }
                }
            }
        }
        else if (keuze == "B" || keuze == "b"){
            log("rechtertrap")
            keuze = prompt('U heeft de rechtertrap gekozen:\nDeze trap u naar het einde van het doolhof, maar daarvoor moet u eerst de volgende som ontcijferen: 1*0=?', 'Antwoord:')
            if (keuze == "0"){
                log("juiste antwoord")
                keuze = prompt('U heeft het juiste antwoord gegeven:\nHet antwoord is juist, maar het einde is nog lange na niet in zicht ;)\nWelke kant wilt u op?:', 'A: Links/B: Rechts')
                if (keuze == "A" || keuze == "a"){
                    log("links")
                    keuze = prompt('U heeft links gekozen:\nHad ik het over een einde? O het einde van het doolhof? Die is nog lang niet in zicht nee, maar u einde daarintegen wel! :( U bent opgegeten door een roofvogel! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" || keuze == "a"){
                        Main()
                    }
                    else if (keuze == "B" || keuze == "b"){
                        window.close()
                    }
                }
                else if (keuze == "B" || keuze == "b"){
                    log("rechts")
                    keuze = prompt('U heeft rechts gekozen:\nHelaas pindakaas. U bent recht in een beren val gelopen, waardoor u levend bent gespiest! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" || keuze == "a"){
                        Main()
                    }
                    else if (keuze == "B" | "b"){
                        window.close()
                    }
                }
            }
            else if (keuze > 0 || keuze < 0){
                log("verkeerd antwoord")
                keuze = prompt('U heeft het verkeerde antwoord gegeven:\nMaar vooruit u krijgt een 2e kans! :D\nVoer het juiste antwoord in: 15*3=?', 'Antwoord:')
                if (keuze == "45"){
                    log("juist antwoord")
                    keuze = prompt('U heeft het juiste antwoord gegeven:\nU mag verder met het doolhof! :D\nWelke kant wilt u op?:', 'A: Links/B: Rechts')
                    if (keuze == "A" || keuze == "a"){
                        log("links")
                        keuze = prompt('U heeft links gekozen:\nJammer u was aan het rennen door het doolhof en bent tegen een steen geklapt, waardoor u dood bent! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                        if(keuze == "A" || keuze == "a"){
                            Main()
                        }
                        else if (keuze == "B" || keuze == "b"){
                            window.close()
                        }
                    }
                    else if (keuze == "B" || keuze == "b"){
                        log("rechts")
                        keuze = prompt('U heeft rechts gekozen:\nJammer u bent opgegeten door een beer die midden op het stond! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                        if(keuze == "A" || keuze == "a"){
                            Main()
                        }
                        else if (keuze == "B" || keuze == "b"){
                            window.close()
                        }
                    }
                }else if (keuze > 45 || keuze < 45){
                    log("verkeerd antwoord")
                    keuze = prompt('U heeft het verkeerde antwoord gegeven:\nU bent dood gegaan door 2 maal het verkeerde antwoord op te geven! :(\nWilt u opnieuw spelen?', 'A: Ja/B: Nee')
                    if(keuze == "A" || keuze == "a"){
                        Main()
                    }
                    else if (keuze == "B" || keuze == "b"){
                        window.close()
                    }
                }
            }
        }
    }
    else if (keuze == "B" || keuze == "b"){
        log("rechter pad")
        keuze = prompt('U heeft het rechter pad gekozen:\nDeze kant leid naar een van de meest gevaarlijkste bruggen over het water ooit!\nWilt u de linker of de rechter brug nemen?:', 'A: Linker brug/B: Rechter brug')
        if (keuze == "A" || keuze == "a"){
            keuze = prompt('U heeft de linker brug gekozen:\nOnder deze brug leven gevaarlijke krokodillen! U kunt deze alleen ontwijken door een ingewikkeld raadsel op te lossen:\nHoeveel krokodillen blijven er over, als er 10 krokodillen zijn, maar 3 krokodillen dood gaan?:', 'Antwoord')
            if (keuze == "7"){
                keuze = prompt('U heeft het juiste antwoord gegeven:\n Oh nee er staat een muur voor u.\nWilt u erover heen of eronderdoor?:', 'A: Overheen/B: Eronderdoor')
                if (keuze == "A" | "a"){
                    keuze = prompt('U heeft gekozen om over de muur heen te klimmen:\nHelaas, u bent halverwege van de muur afgevallen en daardoor overleden! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" | "a"){
                        Main()
                    }
                    else if (keuze == "B" | "b"){
                        window.close()
                    }
                }
                else if (keuze == "B" | "b"){
                    keuze = prompt('U heeft ervoor gekozen om onder de muur door te gaan:\nHelaashet gat was te klein, waoorduur u vast bent komen te zitten! :( Doordatu vast zit bent u verhongerd en gestorven! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                    if(keuze == "A" | "a"){
                        Main()
                    }
                    else if (keuze == "B" | "b"){
                        window.close()
                    }
                }
            }
            else {
                keuze = prompt('U heeft het verkeerde antwoord gegeven:\nHelaas, dit antwoord is onjuist! :( Door dit onjuiste antwoord bent u gestorven! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                if(keuze == "A" | "a"){
                    Main()
                }
                else if (keuze == "B" | "b"){
                    window.close()
                }
            }
        }
        else if (keuze == "B" || keuze == "b"){
            log("rechter brug")
            keuze = prompt('U heeft de rechter brug gekozen:\nOp deze brug leven slangen, deze slangen kunt u alleen ontwijken door eroverheen te springen of door onder de brug door te slingeren:', 'A: Overheen springen/B: Onderdoor slingeren')
            if (keuze == "A" || keuze == "a"){
                log("over slangen springen")
                keuze = prompt('U heeft ervoor gekozen om over de slangen te springen:\nHelaas u bent door een giftige slang gebeten, waardoor u bent overleden! :(\nWilt u opnieuw spelen?:', 'A: Ja/ B: Nee')
                if(keuze == "A" || keuze == "a"){
                    Main()
                }
                else if (keuze == "B" || keuze == "b"){
                    window.close()
                }
            }
            else if (keuze == "B" || keuze == "b"){
                log("onder brug slingeren")
                keuze = prompt('U heeft ervoor gekozen om onder de brug te slingeren:\nGelukt, u heeft de slangen ontweken! :), Maar o nee wat is dat daar, een grote Gorilla! :( U bent geplet door de Gorilla! :(\nWilt u opnieuw spelen?:', 'A: Ja/B: Nee')
                if(keuze == "A" || keuze == "a"){
                    Main()
                }
                else if (keuze == "B" || keuze == "b"){
                    window.close()
                }
            }
        }
    }
}

function log(tTitle){
    document.title = tTitle
    console.log(tTitle)
}