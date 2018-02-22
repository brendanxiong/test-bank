var subjectAreas = ['Aerospace Studies (AERO ST)', 'African American Studies (AF AMER)', 'African Studies (AFRC ST)', 'Afrikaans (AFRKAAN)', 'American Indian Studies (AM IND)', 'American Sign Language (ASL)', 'Ancient Near East (AN N EA)', 'Anesthesiology (ANES)', 'Anthropology (ANTHRO)', 'Applied Linguistics (APPLING)', 'Arabic', 'Archaeology (ARCHEOL)', 'Architecture and Urban Design (ARCH&UD)', 'Armenian (ARMENIA)', 'Art', 'Art History (ART HIS)', 'Arts and Architecture (ART&ARC)', 'Arts Education (ARTS ED)', 'Asian', 'Asian American Studies (ASIA AM)', 'Astronomy (ASTR)', 'Atmospheric and Oceanic Sciences (A&O SCI)', 'Bioengineering (BIOENGR)', 'Bioinformatics (Graduate) (BIOINFO)', 'Biological Chemistry (BIOL CH)', 'Biomathematics (BIOMATH)', 'Biomedical Research (BMD RES)', 'Biostatistics (BIOSTAT)', 'Central and East European Studies (C&EE ST)', 'Chemical Engineering (CH ENGR)', 'Chemistry and Biochemistry (CHEM)', 'Chicana and Chicano Studies (CHICANO)', 'Chinese (CHIN)', 'Civic Engagement (CIVIC)', 'Civil and Environmental Engineering (C&EE)', 'Classics (CLASSIC)', 'Clusters (CLUSTER)', 'Communication (COMM)', 'Community Health Sciences (COM HLT)', 'Comparative Literature (COM LIT)', 'Computational and Systems Biology (C&S BIO)', 'Computer Science (COM SCI)', 'Conservation of Archaeological and Ethnographic Materials (CAEM)', 'Dance', 'Design / Media Arts (DESMA)', 'Digital Humanities (DGT HUM)', 'Disability Studies (DIS STD)', 'Dutch', 'Earth  Planetary  and Space Sciences (EPS SCI)', 'Ecology and Evolutionary Biology (EE BIOL)', 'Economics (ECON)', 'Education (EDUC)', 'Electrical and Computer Engineering (EC ENGR)', 'Electrical Engineering (EL ENGR)', 'Engineering (ENGR)', 'English (ENGL)', 'English as A Second Language (ESL)', 'English Composition (ENGCOMP)', 'Environment (ENVIRON)', 'Environmental Health Sciences (ENV HLT)', 'Epidemiology (EPIDEM)', 'Ethnomusicology (ETHNMUS)', 'Filipino (FILIPNO)', 'Film and Television (FILM TV)', 'French (FRNCH)', 'Gender Studies (GENDER)', 'Geography (GEOG)', 'German', 'Gerontology (GRNTLGY)', 'Global Health (GLB HLT)', 'Global Studies (GLBL ST)', 'Graduate Student Professional Development (GRAD PD)', 'Greek', 'Health Policy and Management (HLT POL)', 'Hebrew', 'Hindi-Urdu (HIN-URD)', 'History (HIST)', 'Honors Collegium (HNRS)', 'Human Genetics (HUM GEN)', 'Hungarian (HNGAR)', 'Indigenous Languages of the Americas (IL AMER)', 'Indo-European Studies (I E STD)', 'Indonesian (INDO)', 'Information Studies (INF STD)', 'International and Area Studies (I A STD)', 'International Development Studies (INTL DV)', 'Iranian', 'Islamic Studies (ISLM ST)', 'Italian', 'Japanese (JAPAN)', 'Jewish Studies (JEWISH)', 'Korean (KOREA)', 'Labor and Workplace Studies (LBR&WS)', 'Latin', 'Latin American Studies (LATN AM)', 'Lesbian  Gay  Bisexual  Transgender  and Queer Studies (LGBTQS)', 'Life Sciences (LIFESCI)', 'Linguistics (LING)', 'Management (MGMT)', 'Management-Master of Financial Engineering (MGMTMFE)', 'Management-Master of Science in Business Analytics (MGMTMSA)', 'Management-PhD (MGMTPHD)', 'Materials Science Engineering (MAT SCI)', 'Mathematics (MATH)', 'Mechanical Aerospace Engineering (MECH&AE)', 'Medical History (MED HIS)', 'Medicine (MED)', 'Microbiology, Immunology, and Molecular Genetics (MIMG)', 'Middle Eastern Studies (M E STD)', 'Military Science (MIL SCI)', 'Molecular and Medical Pharmacology (M PHARM)', 'Molecular Biology (MOL BIO)', 'Molecular Toxicology (MOL TOX)', 'Molecular, Cell, and Developmental Biology (MCD BIO)', 'Molecular, Cellular, and Integrative Physiology (MC&IP)', 'Music (MUSC)', 'Music History (MSC HST)', 'Music Industry (MSC IND)', 'Musicology (MUSCLG)', 'Naval Science (NAV SCI)', 'Near Eastern Languages (NR EAST)', 'Neurobiology (NEURBIO)', 'Neurology (NEURLGY)', 'Neuroscience (Graduate) (NEURO)', 'Neuroscience (NEUROSC)', 'Nursing', 'Obstetrics and Gynecology (OBGYN)', 'Oral Biology (ORL BIO)', 'Pathology and Laboratory Medicine (PATH)', 'Philosophy (PHILOS)', 'Physics', 'Physics and Biology in Medicine (PBMED)', 'Physiological Science (PHYSCI)', 'Physiology (PHYSIOL)', 'Polish (POLSH)', 'Political Science (POL SCI)', 'Portuguese (PORTGSE)', 'Program in Computing (COMPTNG)', 'Psychiatry and Biobehavioral Sciences (PSYCTRY)', 'Psychology (PSYCH)', 'Public Health (PUB HLT)', 'Public Policy (PUB PLC)', 'Religion, Study of (RELIGN)', 'Romanian (ROMANIA)', 'Russian (RUSSN)', 'Scandinavian (SCAND)', 'Science Education (SCI EDU)', 'Semitic', 'Serbian/Croation (SRB CRO)', 'Slavic (SLAVC)', 'Social Science (SOC SC)', 'Social Thought (SOC THT)', 'Social Welfare (SOC WLF)', 'Society and Genetics (SOC GEN)', 'Sociology (SOCIOL)', 'South Asian (S ASIAN)', 'Spanish (SPAN)', 'Statistics (STATS)', 'Surgery', 'Swahili', 'Thai', 'Theater', 'Turkic Languages (TURKIC)', 'University Studies (UNIV ST)', 'Urban Planning (URBN PL)', 'Vietnamese (VIETMSE)', 'World Arts and Cultlures (WL ARTS)', 'Yiddish (YIDDSH)'];

$('#search').click(function() {
     // var $btn=$(this);
     // $btn.button('loading');
     $('#searchQuery').collapse('hide');
     setTimeout(function() { 
       $('#searchQuery').empty();


       var re = new RegExp('.*' + $('#searchInput').val() + '.*', 'i');
       var col = 0;
       for(var i=0; i < subjectAreas.length; i++)
       {
        if(re.test(subjectAreas[i]))
        {
        //$($('.searchClass').get(col%3)).append('<a href="#">' + subjectAreas[i] + '</a>');
        if(col%3==0)
        {
          $('#searchQuery').append('<div class=\"row\"> </div>');
        }
        $('#searchQuery').children().last().append('<div class=\"col\"> <a href=\"#\"> ' + subjectAreas[i] + '</a> </div>');
        col++;

      }
    }
    for(; col%3 != 0; col++)
    {
      $('#searchQuery').children().last().append('<div class=\"col\"> </div>');

    }

    $('#searchQuery').collapse('show');
  }, 400);
    // $('.searchClass').get(1).append('<a>link2</a>');
//$('#searchInput').val().length()
//$('#searchQuery').append("<a> link </a>");

//'div[id*="'+$('#searchInput').val() + "\""
  // $(".collapse").each(function(index, element)
  // {
  //   var re = new RegExp(".*" + $('#searchInput').val() + ".*");
  //   if(re.test($(this).attr('id')))
  //   {
  //     $(this).collapse("show");
  //   } else {
  //     $(this).collapse("hide");
  //   }
  // });
});

$('#getPDF').click(function() {
  console.log("yes");
  // $.get('http://localhost:3000/download', {name: "bfd"}, function(data, status) {
  //   alert(data + status);
  // });
  $.ajax({
    url: "http://localhost:3000/download",
    type: "get",
    data: {
      name: "ERfbdv"
    }
  });

  alert($_GET['name']);
});

RegExp.escape= function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
